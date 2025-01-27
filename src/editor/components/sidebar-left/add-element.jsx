import { Fragment, useState } from "react";
import { batch, connect } from "react-redux";
import {
  Input,
  Widget,
  Button,
  Range,
  LibrarySelect,
  ImageSelect,
  Checkbox,
  SVG,
} from "elements";
import { fa_icons } from "editor-globals";
import { __ } from "wp-i18n";

import {
  EDITOR_COLOR,
  PENCIL_MIN_WIDTH,
  PENCIL_MAX_WIDTH,
} from "./../../utils/constants.js";
import { setEditor, sendNotice } from "./../../redux/actions-editor.js";
import {
  addLayer,
  setLayerProps,
  setDatasWithAddLayer,
} from "./../../redux/actions-data.js";
import {
  createLayerObject,
  getHiddenFileInput,
  loadSVGFromString,
} from "./../../utils/utils.js";
import getHelpText from "./../../utils/help-texts.js";
import ColorPickerAdvanced from "./../../elements/color-picker-advanced.jsx";
import ShadowPickerAdvanced from "./../../elements/shadow-picker-advanced.jsx";

const AddElement = ({
  pencilWidth,
  pencilColor,
  pencilShadow,
  fillColor,
  canvasWidth,
  canvasHeight,
  layer,
  selectedElement,
  setEditor,
  sendNotice,
  addLayer,
  setLayerProps,
  setDatasWithAddLayer,
}) => {
  const [showSettings, setShowSettings] = useState(true);
  const [svgSource, setSvgSource] = useState("");
  const [group, setGroup] = useState(false);
  const [resize, setResize] = useState(false);
  const onChange = (editorState, property) => (value) => {
    batch(() => {
      setEditor(editorState, value);
      if (
        layer &&
        (layer.type === "path" ||
          layer.type === "polygon" ||
          layer.type === "polyline")
      ) {
        setLayerProps(layer.id, property, value);
      }
    });
  };
  const tabs = [
    {
      name: "stroke",
      label: __("Stroke", "pixmagix"),
      icon: "paintbrush",
      content: (
        <Fragment>
          <Range
            label={__("Stroke Width", "pixmagix")}
            help={getHelpText("strokeWidth")}
            value={pencilWidth}
            onChange={(value) => setEditor("pencilWidth", value)}
            min={PENCIL_MIN_WIDTH}
            max={PENCIL_MAX_WIDTH}
            step={1}
          />
          <ColorPickerAdvanced
            label={__("Stroke Color", "pixmagix")}
            color={pencilColor}
            onChange={(color) => setEditor("pencilColor", color)}
          />
        </Fragment>
      ),
    },
    {
      name: "fill",
      label: __("Fill", "pixmagix"),
      icon: "fill",
      content: (
        <Fragment>
          <ColorPickerAdvanced
            label={__("Fill Color", "pixmagix")}
            color={fillColor}
            onChange={(color) => setEditor("fillColor", color)}
          />
        </Fragment>
      ),
    },
    {
      name: "shadow",
      label: __("Shadow", "pixmagix"),
      icon: "circle-half-stroke",
      content: (
        <Fragment>
          <ShadowPickerAdvanced
            value={pencilShadow}
            onChange={(value) => setEditor("pencilShadow", value)}
          />
        </Fragment>
      ),
    },
  ];

  return (
    <Fragment>
      <Widget label={__("Add Element", "pixmagix")}>
        <Button
          block
          active={!!selectedElement}
          onClick={() => {
            batch(() => {
              setEditor("activeModal", "elements");
              setSvgSource("");
            });
          }}
        >
          {__("Import", "pixmagix")}
        </Button>
        <Button
          block
          active={!!svgSource}
          onClick={() => {
            setEditor("selectedElement", null);
            getHiddenFileInput(
              "image/svg+xml",
              "readAsText",
              setSvgSource
            ).click();
          }}
        >
          {__("Upload From Computer", "pixmagix")}
        </Button>
      </Widget>
      {!!selectedElement && (
        <Fragment>
          <Widget label={__("Selected SVG", "pixmagix")}>
            <ImageSelect
              type="svg"
              onReplace={() => setEditor("activeModal", "elements")}
              onSelect={() => {
                const obj = createLayerObject({
                  type: "path",
                  path: selectedElement.path,
                  fill: fillColor,
                  stroke: pencilColor,
                  strokeWidth: pencilWidth,
                  shadow: pencilShadow,
                  left: canvasWidth / 2,
                  top: canvasHeight / 2,
                });
                batch(() => {
                  addLayer(obj);
                  setEditor("selectedElement", null);
                });
              }}
            >
              <SVG
                viewBox={selectedElement.viewBox}
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d={selectedElement.path}
                  fill={fillColor}
                  stroke={pencilColor}
                  strokeWidth={pencilWidth}
                />
              </SVG>
            </ImageSelect>
          </Widget>
          <Widget tabs={tabs} />
        </Fragment>
      )}
      {!!svgSource && (
        <Widget label={__("Selected SVG", "pixmagix")}>
          <ImageSelect
            type="svg"
            src={svgSource}
            controls={
              <Fragment>
                <Checkbox
                  label={__("Import SVG as One Layer", "pixmagix")}
                  checked={group}
                  onChange={setGroup}
                />
                <Checkbox
                  label={__("Resize Canvas to SVG Size", "pixmagix")}
                  checked={resize}
                  onChange={setResize}
                />
              </Fragment>
            }
            onReplace={() => {
              getHiddenFileInput(
                "image/svg+xml",
                "readAsText",
                setSvgSource
              ).click();
            }}
            onSelect={() =>
              loadSVGFromString(
                svgSource,
                (objects, options) => {
                  const layers =
                    group && objects.length > 1
                      ? createLayerObject({
                          type: "group",
                          objects,
                        })
                      : objects.map((obj) => createLayerObject(obj));
                  if (resize) {
                    setDatasWithAddLayer(
                      {
                        canvasWidth: options.width,
                        canvasHeight: options.height,
                      },
                      layers
                    );
                  } else {
                    addLayer(layers);
                  }
                  setSvgSource("");
                },
                () => {
                  sendNotice(__("SVG Parsing Failed", "pixmagix"), "error");
                }
              )
            }
          />
        </Widget>
      )}
    </Fragment>
  );
};

export default connect(
  (state) => {
    const activeLayer = state.editor.activeLayers[0];
    const layer = activeLayer ? state.data.present.layers[activeLayer] : null;

    return {
      pencilWidth: state.editor.pencilWidth,
      pencilColor: state.editor.pencilColor,
      pencilShadow: state.editor.pencilShadow,
      selectedElement: state.editor.selectedElement,
      fillColor: state.editor.fillColor,
      layer,
      canvasWidth: state.data.present.canvasWidth,
      canvasHeight: state.data.present.canvasHeight,
    };
  },
  {
    setEditor,
    sendNotice,
    addLayer,
    setLayerProps,
    setDatasWithAddLayer,
  }
)(AddElement);
