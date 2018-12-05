/** ************Collection Details********************** */
// Collection Name : userCollection
// Version :001
/** ************************************************** */

import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";

const userCollection = new Mongo.Collection("users");

const userSchema = new SimpleSchema({
  _id: {
    type: String,
    label: "User Id"
  },
  firstName: {
    type: String,
    max: 30,
    label: "First name"
  },
  lastName: {
    type: String,
    max: 20,
    label: "Last name"
  },
  nickName: {
    type: String,
    max: 20,
    label: "Nick name",
    autoValue: data => {
      if (data.shortName) {
        return data.shortName.toLowerCase();
      }
    }
  },
  gender: {
    type: String,
    label: "Gender",
    optional: true
  },
  email: {
    type: String,
    max: 60,
    label: "Email"
  },
  password: {
    type: String,
    max: 60,
    min: 8,
    label: "Password"
  },
  mobileNumber: {
    type: String,
    max: 60,
    label: "Mobile Number",
    optional: true
  },
  occupation: {
    type: String,
    label: "Occupation",
    max: 100,
    optional: true
  },
  summary: {
    type: String,
    label: "summary",
    max: 100,
    optional: true
  },
  profileImage: {
    type: String,
    label: "Profile image",
    optional: true
  },
  acceptedTerms: {
    type: Boolean,
    label: "summary",
    max: 100,
    defaultValue: true
  },
  address1: {
    type: String,
    label: "Address 1",
    max: 100,
    optional: true
  },
  address2: {
    type: String,
    label: "Address 2",
    max: 100,
    optional: true
  },
  city: {
    type: String,
    label: "City",
    max: 30,
    optional: true
  },
  state: {
    type: String,
    label: "State",
    max: 30,
    optional: true
  },
  country: {
    type: String,
    label: "Country",
    max: 30,
    optional: true
  },
  zipcode: {
    type: String,
    label: "Zip code",
    max: 10,
    optional: true
  },
  stripeClientId: {
    type: String,
    label: "Stripe client Id",
    optional: true
  },
  createdAt: {
    type: Date,
    label: "Created date"
  },
  updatedAt: {
    type: Date,
    label: "Updated date"
  }
});

userCollection.attachSchema(userSchema);
if (Meteor.isServer) {
  userCollection.allow({
    insert() {
      return true;
    },
    update() {
      return true;
    },
    remove() {
      return true;
    }
  });

  userCollection._ensureIndex(
    {
      email: 1
    },
    {
      unique: true
    }
  );

  userCollection._ensureIndex(
    {
      nickName: 1
    },
    {
      unique: true
    }
  );
}

export default userCollection;
