import React from "react";
import { View } from "react-native";
import {
  Layout,
  Section,
  SectionContent,
  Text,
  themeColor,
} from "react-native-rapi-ui";

export default function ({ navigation }) {
  return (
    <Layout>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          margin: 10,
        }}
      >
        <Section>
          <SectionContent>
            <Text
              style={{
                fontSize: 22,
                color: themeColor.success900,
              }}
            >
              NutriFlex
            </Text>
            <Text
              style={{
                marginTop: 10,
              }}
            >
              O Nutri Flex é um produto focado em pessoas que buscam qualidade
              de vida, saúde e estética sem abrir mão do prazer de comer
              alimentos considerados “não saudáveis”.
            </Text>

            <Text
              style={{
                marginTop: 10,
              }}
            >
              Com uma Dieta não restritiva os usuários conseguem mantê-la por
              mais tempo e alcançar seus objetivos sem desistir no meio do
              caminho.
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                marginTop: 10,
              }}
            >
              Desenvolvedores:
            </Text>
            <Text>Leandro Sena</Text>
            <Text>Iago Tavares dos Santos</Text>
          </SectionContent>
        </Section>
      </View>
    </Layout>
  );
}
