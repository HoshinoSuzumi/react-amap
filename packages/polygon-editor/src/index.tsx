import { forwardRef, useEffect, useState } from 'react';
import { useEventProperties } from '@uiw/react-amap-utils';

export interface PolygonEditorProps extends AMap.PolygonEditor, AMap.PolygonEditorEvents {
  /** 是否开启编辑功能 */
  active?: boolean;
  polygon?: AMap.Polygon;
}

export const PolygonEditor = forwardRef<PolygonEditorProps, PolygonEditorProps>((props, ref) => {
  const { active, map, polygon } = props;
  const [visiable, setVisiable] = useState<boolean>(true);
  const [polyEditor, setPolyEditor] = useState<AMap.PolygonEditor>();

  useEffect(() => {
    if (polygon && map && !polyEditor && AMap && AMap.PolygonEditor) {
      const instance = new AMap.PolygonEditor(map, polygon);
      polygon.on('hide', () => setVisiable(false));
      polygon.on('show', () => setVisiable(true));
      setPolyEditor(instance);
    }
  }, [polygon]);

  useEffect(() => {
    if (!polyEditor) {
      return;
    }
    if (visiable && !active) {
      polyEditor.close();
    } else if (visiable && active) {
      polyEditor.open();
    } else if (!visiable && active) {
      polyEditor.close();
    }
  }, [active, visiable]);

  useEventProperties<AMap.Polygon, AMap.PolygonEditorEvents>(polygon!, props, [
    'onEnd',
    'onAddnode',
    'onAdjust',
    'onMove',
    'onAdd',
  ]);
  return null;
});