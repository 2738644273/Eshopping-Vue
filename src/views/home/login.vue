<template>
  <div class="container">
   	<div class="left-bottom-sign"></div>
		<div class="back-btn yticon icon-zuojiantou-up"></div>
		<div class="right-top-sign"></div>
		<!-- 设置白色背景防止软键盘把下部绝对定位元素顶上来盖住输入框等 -->
    <div class="wrapper shadow-box">
    
      <div class="welcome">登录</div>
      <div class="input-content">
        <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="username"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div style="margin: 16px">
            <van-button round block type="danger" native-type="submit"
              >提交</van-button
            >
          </div>
        </van-form>
      </div>
    </div>
    <div class="register-section">
      还没有账号?
      <span style="color:#3535ff" @click="go('/register')">马上注册</span>
    </div>
  </div>
</template>

<script>
import { login, getUserInfo } from "@/api/login.js";
import { Field, Form, Button } from "vant";
export default {
  data() {
    return {
      username: "",
      password: "",
      mobile: "",
      password: "",
      logining: false,
      backPageRoute: "",
      backPageOptions: {},
    };
  },
  created() {},
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button,
  },
  methods: {
    go(url) {
      this.$router.push(url);
    },
    onSubmit(values) {
      const toast = this.$toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true,
        message: "正在登录中",
      });
      login(values).then((res) => {
        if (res.Code == 200) {
          this.$store.dispatch("SaveToken", res.Data.token);
          this.$store.dispatch("SaveUser", res.Data.USER);
            toast.message = "登录成功";
            toast.icon = "success";
           let vm = this
            setTimeout(function () {
				toast.clear();
              vm.$router.push("/home");
            }, 500);
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "uni.scss";


	.container {
		width: 100%;
		padding-top: 115px;
		position: absolute;
		height: 82.5%;
		overflow: hidden;
		background: #fff;
	}

	.wrapper {
		position: relative;
		z-index: 90;
		background: #fff;
		padding-bottom: 20px;
	}

	.back-btn {
		position: absolute;
		left: 20px;
		z-index: 9999;
		padding-top: 0px;
		top: 20px;
		font-size: 20px;
		color: #303133;
	}

	.left-top-sign {
		font-size: 60px;
		color: #f8f8f8;
		position: relative;
		left: -8px;
	}

	.right-top-sign {
		position: absolute;
		top: 40px;
		right: -15px;
		z-index: 95;

		&:before,
		&:after {
			display: block;
			content: "";
			width: 200px;
			height: 40px;
			background: #b4f3e2;
		}

		&:before {
			webkit-transform: rotate(50deg);
			transform: rotate(50deg);
			border-radius: 0 50px 0 0;
		}

		&:after {
			position: absolute;
			right: -99px;
			top: 0;
			-webkit-transform: rotate(-50deg);
			transform: rotate(-50deg);
			border-radius: 50px 0 0 0;
			/* background: pink;
			/* background: pink; */
		}
	}

	.left-bottom-sign {
		position: absolute;
		left: -135px;
		bottom: -160px;
		border: 50px solid #d0d1fd;
		border-radius: 50%;
		padding: 90px;
	}

	.welcome {
		position: relative;
		left: 25px;
		top: -45px;
		font-size: 23px;
		color: #555;
		// text-shadow: 1px 0px 1px rgb(0 0 0 / 30%);
	}

	.input-content {
		padding: 0 30px;
	}

	.input-item {
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		flex-direction: column;
		-webkit-box-align: start;
		align-items: flex-start;
		-webkit-box-pack: center;
		justify-content: center;
		padding: 0 15px;
		background: #f8f6fc;
		height: 60px;
		border-radius: 4px;
		margin-bottom: 25px;

		&:last-child {
			margin-bottom: 0;
		}

		.tit {
			height: 25px;
			line-height: 28px;
			font-size: 13px;
			color: #606266;
		}

		input {
			height: 30px;
			font-size: 15px;
			color: #303133;
			width: 100%;
		}
	}

	.confirm-btn {
		width: 315px;
		height: 38px;
		line-height: 38px;
		border-radius: 50px;
		margin-top: 35px;
		background: #fa436a;
		color: #fff;
		font-size: 16px;
		margin-left: 7%;

		&:after {
			border-radius: 100px;
		}
	}

	.forget-section {
		font-size: 13px;
		color: #4399fc;
		text-align: center;
		margin-top: 20px;
	}

	.register-section {
		position: absolute;
		left: 0;
		width: 100%;
		font-size: 13px;
		color: #606266;
		text-align: center;

		text {
			color: $font-color-spec;
			margin-left: 10px;
		}
	}
</style>
