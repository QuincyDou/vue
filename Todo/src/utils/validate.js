/* 验证邮箱地址是否合法 */
export function validEmail(str) {
  const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/i
  return reg.test(str.trim())
}
