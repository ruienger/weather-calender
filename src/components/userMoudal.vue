<template>
    <el-form :model="userInfo" ref="userInfo" label-width="100px" class="demo-userInfo">
    <el-form-item label="用户名" prop="username" required>
        <el-input v-model="userInfo.username" placeholder="您的用户名"></el-input>
    </el-form-item>
    <el-form-item label="真实姓名" prop="realname" required>
        <el-input v-model="userInfo.realname" placeholder="您的真实姓名"></el-input>
    </el-form-item>
    <el-form-item label="性别" required>
        <el-select v-model="userInfo.gender" placeholder="性别">
        <el-option label="男" value="男"></el-option>
        <el-option label="女" value="女"></el-option>
        </el-select>
    </el-form-item>
    <el-form-item label="密码" prop="password" required>
        <el-input v-model="userInfo.password"></el-input>
    </el-form-item>
    <el-form-item label="手机号" prop="telephone" required>
        <el-input v-model="userInfo.telephone"></el-input>
    </el-form-item>
    <el-form-item label="QQ号" prop="qq">
        <el-input v-model="userInfo.qq"></el-input>
    </el-form-item>
    <el-form-item label="微信号" prop="wxid">
        <el-input v-model="userInfo.wxid"></el-input>
    </el-form-item>
    <el-form-item label="省份" prop="province">
        <el-input v-model="userInfo.province"></el-input>
    </el-form-item>
    <el-form-item label="城市" prop="city">
        <el-input v-model="userInfo.city"></el-input>
    </el-form-item>
    <el-form-item label="地区" prop="area">
        <el-input v-model="userInfo.area"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="submitForm('userInfo')">确定</el-button>
        <el-button @click="resetForm('userInfo')">重置</el-button>
    </el-form-item>
    </el-form>
</template>
<script>
  export default {
    data() {
      return {
        // rules: {
        //   name: [
        //     { required: true, message: '请输入活动名称', trigger: 'blur' },
        //     { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        //   ],
        //   region: [
        //     { required: true, message: '请选择活动区域', trigger: 'change' }
        //   ],
        //   date1: [
        //     { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        //   ],
        //   date2: [
        //     { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        //   ],
        //   type: [
        //     { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        //   ],
        //   resource: [
        //     { required: true, message: '请选择活动资源', trigger: 'change' }
        //   ],
        //   desc: [
        //     { required: true, message: '请填写活动形式', trigger: 'blur' }
        //   ]
        // }
      };
    },
    props:{
        userInfo: Object
        // {
        //   id: '',
        //   username: '',
        //   realname: '',
        //   password: '',
        //   enabled: true,
        //   type: '普通用户',
        //   telephone: '',
        //   qq: '',
        //   wxid: '',
        //   registerTime: '',
        //   gender: '',
        //   province: '',
        //   city: '',
        //   area: ''
        // }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$emit('submit-clicked',this.userInfo)
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scoped>
button{
    width: fit-content;
    height: fit-content;
}

</style>