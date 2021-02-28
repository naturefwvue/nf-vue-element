
import { provide, inject, reactive, readonly } from 'vue'
import symbolUserInfo from './symbol'

const userState = () => {
  // 定义标识
  // const sysUserInfo = Symbol('userOnlineInfo')

  // 存放当前登录的用户信息
  const userInfo = reactive({
    isLogon: false,
    isOnline: false,
    userId: 1,
    userCode: 'jyk',
    userNike: '海洋',
    departmentId: 123,
    departmentName: '',
    role: [1],
    power: [1, 2, 3]
  })

  // 在当前组件里面注入
  const register = () => {
    provide(symbolUserInfo, userInfo)
  }

  // 获取共享的用户状态
  const _user = inject(symbolUserInfo)

  // 设置登录用户的信息
  const setUser = (user) => {
    Object.assign(_user, user)
  }

  // 返回注入的状态，只读形式
  const getUser = () => {
    return readonly(_user)
  }

  // 返回当前用户是否登录
  const isLogon = () => {
    return _user.isLogon
  }

  return {
    // 返回组件内状态
    userInfo: readonly(userInfo),
    // 在组件里注入状态，可以实现子组件共享
    register,
    // 修改状态的函数
    setUser,
    // 获取共享的状态
    getUser,
    // 返回是否登录的状态
    isLogon
  }
}

export default userState
