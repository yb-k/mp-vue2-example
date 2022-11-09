import BaseApiService from './core';

class FileService extends BaseApiService {
  constructor() {
    super('/file');
  }
  upload(file) {
    const form = new FormData();
    form.append('file', file);
    return this.post('/upload', form, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
}

export default new FileService();
