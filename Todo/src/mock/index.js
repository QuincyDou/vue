import Mock from 'mockjs'
import loginAPI from './login'

Mock.setup({
  timeout: '350-600'
})

Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUsername)

export default Mock
