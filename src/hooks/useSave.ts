import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import { useRef } from 'react';

export const useSave = () => {
  const element = useRef<HTMLDivElement>(null);

  const onDownloadBtn = () => {
    const node = element.current;

    if (node) {
      domtoimage.toBlob(node).then((blob) => {
        saveAs(blob, 'students.png');
      });
    }
  };

  return { onDownloadBtn, element };
};
