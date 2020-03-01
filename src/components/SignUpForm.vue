<template>
  <form
    id="signup-form"
    @submit.prevent="onSubmit"
    method="POST"
    class="w-full"
  >
     <h3 class="text-center font-sans p-4 text-3xl">Together we can create a more meaningful future</h3>
         <p class="text-center text-2xl font-sans pb-2">Fill Out The Form Below</p>
    <div class="flex flex-wrap -mx-3 mb-6">
         <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-xs font-bold mb-2"
          for="first-name"
          >First Name</label
        >
        <input
          class="appearance-none block w-full bg-gray-200 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          name="first-name"
          v-model="firstName"
          type="text"
          placeholder="Jane"
          required
        />
        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-xs font-bold mb-2"
          for="last-name"
          >Last Name</label
        >
        <input
          class="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          name="last-name"
          v-model="lastName"
          type="text"
          placeholder="Doe"
          required
        />
        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide text-xs font-bold mb-2"
          for="email"
          >Email</label
        >
        <input
          class="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          name="email"
          type="Email"
          v-model="email"
          placeholder="example@example.com"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9]+\.[a-z]{2,4}$"
        />
        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide text-xs font-bold mb-2"
          for="phone-number"
          >Phone Number</label
        >
        <input
          class="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          name="phone-number"
          v-model="phoneNumber"
          type="Phone"
          placeholder="518-888-5868"
        />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide text-xs font-bold mb-2"
          for="zipcode"
          >Zip Code</label
        >
        <input
          class="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          name="zipcode"
          v-model="zipCode"
          type="Zip"
          placeholder="12067"
          required
        />
        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
      </div>
    </div>
    <div class="flex items-stretch">
      <button
        class="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Join The Movement!
      </button>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    zipCode: ""
  },
  methods: {
    onSubmit() {
      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phoneNumber: this.phoneNumber,
        zipCode: this.zipCode
      };
      alert("Thank You!");
      axios
        .post(
          'https://riley-for-congress.firebaseio.com/signups.json',
          formData
        )
        .then(res => console.log(error))
        .catch(error => console.log(error))
    }
  }
};
</script>

<style scoped></style>
