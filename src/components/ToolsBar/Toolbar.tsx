import React from 'react';
import styles from '@components/ToolsBar/Toolbar.module.css';

import IconButton from '@components/common/IconButton';
import { CanvasMode, CanvasState, LayerType } from '@types';

type Props = {
  canvasState: CanvasState;
  setCanvasState: (newState: CanvasState) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
};

function Toolbar({ canvasState, setCanvasState, undo, redo, canUndo, canRedo }: Props) {
  return (
    <div className={styles.toolsContainer}>
      <div className={styles.toolsPanel}>
        <div className={styles.toolsPanelSection}>
          <IconButton
            isActive={canvasState.mode === CanvasMode.None || canvasState.mode === CanvasMode.Translating || canvasState.mode === CanvasMode.SelectionNet || canvasState.mode === CanvasMode.Pressing || canvasState.mode === CanvasMode.Resizing}
            iconClass="cursor"
            onClick={() => setCanvasState({ mode: CanvasMode.None })}
          />
          <IconButton
            iconClass="pencil"
            isActive={canvasState.mode === CanvasMode.Pencil}
            onClick={() => setCanvasState({ mode: CanvasMode.Pencil })}
          />
          <IconButton
            iconClass="rectangle"
            isActive={canvasState.mode === CanvasMode.Inserting && canvasState.layerType === LayerType.Rectangle}
            onClick={() =>
              setCanvasState({
                mode: CanvasMode.Inserting,
                layerType: LayerType.Rectangle
              })
            }
          />
          <IconButton
            iconClass="ellipse"
            isActive={canvasState.mode === CanvasMode.Inserting && canvasState.layerType === LayerType.Ellipse}
            onClick={() =>
              setCanvasState({
                mode: CanvasMode.Inserting,
                layerType: LayerType.Ellipse
              })
            }
          />
        </div>
        <div className={styles.separator}></div>
        <div className={styles.toolsPanelSection}>
          <IconButton
            iconClass="undo"
            onClick={undo}
            disabled={!canUndo}
          />
          <IconButton
            iconClass="redo"
            onClick={redo}
            disabled={!canRedo}
          />
        </div>
      </div>
    </div>
  );
}

export default Toolbar;
