const stripeConfig = {
  // test config
  userName: "manojkumar.p@probeseven.com",
  password: "Leosoft3889!@#",
  publicKey: "pk_test_UyWUA7UBJ9iAiwI6g1glOToc",
  secretKey: "sk_test_zEDiQoh0sRwbEGsbkREOR7AW"
};

const tkCreditsConfig = {
  signupLimit: {
    value: "Signup",
    points: 10000
  },
  register: {
    id: "register",
    value: "Register",
    points: 2500
  },
  inviteUserRegister: {
    id: "inviteUserRegister",
    value: "Verified referal",
    points: 1500
  },
  contributionOneDollar: {
    id: "contributionOneDollar",
    value: "Cash contribution",
    points: 100
  },
  contributionOneHour: {
    id: "contributionOneHour",
    value: "Time contribution",
    points: 5
  },
  timeContribution: {
    id: "contributionOneHour",
    value: "Time contribution",
    points: 5
  }
};

export { stripeConfig, tkCreditsConfig };
