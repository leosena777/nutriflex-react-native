import React, { useContext } from "react";
import { View, Linking, Image } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import {
  Avatar,
  Layout,
  Section,
  SectionContent,
  Text,
  themeColor,
  TopNav,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default function ({ navigation }) {
  const auth = getAuth();

  return (
    <Layout>
      <TopNav
        backgroundColor={themeColor.success900}
        rightContent={
          <Ionicons name="exit" size={20} color={themeColor.white} />
        }
        rightAction={() => signOut(auth)}
        middleContent={
          <Image
            resizeMode="contain"
            style={{
              height: 60,
              width: 60,
            }}
            source={require("../../assets/logo.png")}
          />
        }
      />
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
      <Section
        style={{
          margin: 10,
        }}
      >
        <SectionContent>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Seu progresso
          </Text>
          <View
            style={{
              backgroundColor: themeColor.success900,
              borderRadius: 8,
              display: "flex",
              flexDirection: "row",
              padding: 10,
              marginTop: 10,
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: themeColor.white,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                57 kg
              </Text>
              <Text
                style={{
                  color: themeColor.white,
                }}
              >
                Peso
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: themeColor.white,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                164 cm
              </Text>
              <Text
                style={{
                  color: themeColor.white,
                }}
              >
                Altura
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: themeColor.white,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                13%
              </Text>
              <Text
                style={{
                  color: themeColor.white,
                }}
              >
                Gordura corporal
              </Text>
            </View>
          </View>
        </SectionContent>
      </Section>
      <Section
        style={{
          margin: 10,
        }}
      >
        <SectionContent>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Nutrição
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 10,
            }}
          >
            <View
              style={{
                flex: 1,
              }}
            >
              <View
                style={{
                  width: "90%",
                  height: 4,
                  backgroundColor: "#ccc",
                }}
              >
                <View
                  style={{
                    width: "30%",
                    height: 4,
                    backgroundColor: themeColor.success900,
                  }}
                ></View>
              </View>
              <Text
                style={{
                  fontSize: 11,
                }}
              >
                30% Carboidratos
              </Text>
            </View>
            <View
              style={{
                flex: 1,
              }}
            >
              <View
                style={{
                  width: "90%",
                  height: 4,
                  backgroundColor: "#ccc",
                }}
              >
                <View
                  style={{
                    width: "60%",
                    height: 4,
                    backgroundColor: themeColor.success900,
                  }}
                ></View>
              </View>
              <Text
                style={{
                  fontSize: 11,
                }}
              >
                60% Proteína
              </Text>
            </View>
            <View
              style={{
                flex: 1,
              }}
            >
              <View
                style={{
                  width: "90%",
                  height: 4,
                  backgroundColor: "#ccc",
                }}
              >
                <View
                  style={{
                    width: "20%",
                    height: 4,
                    backgroundColor: themeColor.success900,
                  }}
                ></View>
              </View>
              <Text
                style={{
                  fontSize: 11,
                }}
              >
                20% Gordura
              </Text>
            </View>
          </View>
        </SectionContent>
      </Section>
    </Layout>
  );
}
