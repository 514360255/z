/**
 * 倒计时
 * @param setState
 * @param callBack
 * @param time
 * @returns {string}
 */
export const countdown = (setState = () => {}, callBack = () => {}, time = 60) => {
  if (time > 1) {
    const t = time - 1;
    setTimeout(() => countdown(setState, callBack, t), 1000);
    setState(`${t}s`);
  } else {
    setState('重新获取验证码');
    callBack();
  }
};

export const transformRequestResponse = async (request, params) => {
  const {
    data: { detail, pageSum },
  } = await request({
    ...params,
    page: params.current,
  });
  return {
    data: detail,
    success: true,
    total: pageSum,
  };
};

/**
 * 文件转base64
 * @param file
 * @param callback
 */
export const fileToBase64 = (file, callback) => {
  const render = new FileReader();
  render.addEventListener("load", () => callback(render.result));
  render.readAsDataURL(file);
}
