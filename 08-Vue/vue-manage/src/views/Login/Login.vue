<!-- 系统登陆界面 -->
<template>
  <div class="login-wrap">
    <el-form :model="form" :rules="rules" ref="form">
      <!-- 登录提示语 -->
      <p class="login-title">欢迎您登录</p>
      <p class="login-tip">请输入账号和密码</p>

      <!-- 账号与密码输入框 -->
      <el-form-item prop="name">
        <el-input
          prefix-icon="el-icon-user"
          placeholder="账号"
          v-model="form.name"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          prefix-icon="el-icon-lock"
          placeholder="密码"
          v-model="form.password"
          show-password
        ></el-input>
      </el-form-item>

      <!-- 登录按钮 -->
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  components: {},
  data() {
    return {
      form: {
        name: '',
        password: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 6,
            max: 10,
            message: '长度在 6 到 10 个字符',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          localStorage.setItem('token', 'Bearer xxxx')
          this.$router.push('/')
        } else {
          localStorage.removeItem('token')
          return false
        }
      })
    },
  },
}
</script>

<style lang="less" scoped>
.login-wrap {
  position: relative;
  height: 100%;
  background-image: url('@/assets/img/login-bg.jpg');
  background-size: contain;

  .el-form {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 300px;
    padding: 0 20px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.3);
    color: #333;
    transform: translate(-50%, -50%);

    .login-title {
      font-size: 28px;
    }

    .login-tip {
      font-size: 14px;
    }

    .el-button {
      display: block;
      margin: 0 auto;
    }
  }
}
</style>
