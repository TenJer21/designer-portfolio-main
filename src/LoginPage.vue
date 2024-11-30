<template>
  <div class="login-container">
    <div class="login-box">
      <h1 class="login-title">Login</h1>
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="input-group">
          <label for="email" class="form-label">Email</label>
          <input
            v-model="email"
            id="email"
            type="email"
            placeholder="Enter your email"
            class="form-input"
          />
        </div>
        <div class="input-group">
          <label for="password" class="form-label">Password</label>
          <input
            v-model="password"
            id="password"
            type="password"
            placeholder="Enter your password"
            class="form-input"
          />
        </div>
        <button type="submit" class="submit-button">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      if (this.email === "test@example.com" && this.password === "password") {
        this.$router.push("/home");
      } else {
        alert("Invalid email or password");
      }
    },
  },
};
</script>

<style scoped>
/* Fonts */
@import url("https://fonts.googleapis.com/css2?family=Eczar&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Work+Sans&display=swap");

/* General Container */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffddbf; /* Matches the bg-yellowis class */
  font-family: "Work Sans", sans-serif;
}

/* Login Box */
.login-box {
  background-color: #ffffff; /* White background for the form */
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  width: 400px;
  padding: 2rem;
  text-align: center;
}

/* Title */
.login-title {
  font-size: 2rem;
  font-weight: bold;
  color: #403930; /* Matches the heading3 color */
  font-family: "Work Sans", sans-serif;
  margin-bottom: 1.5rem;
}

/* Form */
.login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Labels */
.form-label {
  font-size: 1rem;
  color: #594f43; /* Matches menu-button color */
  text-align: left;
  font-weight: bold;
  display: block;
}

/* Inputs */
.form-input {
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #cccccc;
  border-radius: 12px;
  font-family: "Work Sans", sans-serif;
  color: #403930;
}

.form-input:focus {
  outline: none;
  border-color: #ffddbf;
  box-shadow: 0 0 4px #ffddbf; /* Subtle glow for focus */
}

/* Button */
.submit-button {
  background-color: #ffddbf; /* Matches bg-yellowis */
  color: #403930;
  font-family: "Work Sans", sans-serif;
  font-size: 1rem;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #ffeed9; /* Slightly lighter hover effect */
}
</style>
