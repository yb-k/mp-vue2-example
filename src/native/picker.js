import { extend } from '@/native';
import { MEDIA_TYPE_ENUM, STATUS } from './constants';

export const IMAGE_PICKER = 'imagePicker';

extend(IMAGE_PICKER, (options = {}) => {
  // 기본값 선언
  const _options = {
    mode: 'SINGLE',
    column: 3,
    mediaType: options.mediaType ?? MEDIA_TYPE_ENUM.PHOTO,
    saveAlbum: options.saveAlbum ?? true,
  };
  return new Promise((resolve, reject) => {
    M.media.picker({
      ..._options,
      callback: function (status, result) {
        if (status == STATUS.SUCC) {
          resolve(result);
        } else {
          reject(result);
        }
      },
    });
  });
});
