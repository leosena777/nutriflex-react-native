import { getAuth } from "firebase/auth";
import React from "react";
import { View } from "react-native";
import {
  Avatar,
  Layout,
  Section,
  SectionContent,
  Text,
} from "react-native-rapi-ui";

export default function ({ navigation }) {
  const auth = getAuth();

  return (
    <Layout>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Section
          style={{
            margin: 10,
          }}
        >
          <SectionContent
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Avatar
              source={require("../../assets/avatar.jpeg")}
              size="lg"
              shape="round"
            />
            <View
              style={{
                marginLeft: 10,
              }}
            >
              <Text>{auth.currentUser.email}</Text>
              <Text>30 anos</Text>
            </View>
          </SectionContent>
        </Section>
      </View>
    </Layout>
  );
}
