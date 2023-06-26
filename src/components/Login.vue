<template>
  <div class="login">
    <el-card class="box-card">
      <template #header>
        <h3 class="login_font">MY MUSIC</h3>
      </template>
      <el-form style="color: whitesmoke !important;" :model="form" :rules="rules" ref="form" label-width="80px" class="form">
        <el-form-item label="Account" prop="username" id="my_item">
          <el-input v-model="form.username" type="text" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">进入</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
  <router-view></router-view>
</template>
  
<script>
import { ElButton, ElCard, ElForm, ElFormItem, ElInput } from 'element-plus'
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/en'

export default {
  name: 'LoginForm',
  components: {
    ElButton,
    ElCard,
    ElForm,
    ElFormItem,
    ElInput
  },
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 4, max: 10, message: '长度在 4 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log('登录成功')

        }
      })
      this.$router.push("/Music")
    }
  }
}
</script>
  
<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #f2f2f2;
  background-image: url("../img/global_back.jpg");
}

.login_font {
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  font-size: 30px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.el-form-item.label {
  color: red;
}
.box-card {
  width: 400px;
  background-color: rgba(255, 255, 255, 0);
  border: 0px solid red;
}

.form {
  margin-top: 20px;
  padding: 20px;
}
#my_item .el-form-item__label{
  color: black !important;
}
.el-form-item__content {
  justify-content: center;
  align-items: center;
}</style>