import { flex } from "@/constants/Style";
import { View } from "react-native";
import ListHeading from "./ListHeading";
import { FlatList } from "react-native";
import PlaceCard from "./PlaceCard";
import { FirstCardText, SecondCardText } from "./Text";

const ListItems = ({
  label,
  style,
  startIndex = 0,
  textArray,
  firstCard,
}: {
  label: string;
  style?: any;
  startIndex?: number;
  textArray: string[] | any;
  firstCard: boolean;
}) => {
  const imageText = textArray?.map((item: string) => {
    return item?.length > 15 ? item.slice(0, 15) + "..." : item;
  });

  return (
    <View
      style={{
        ...flex({ dir: "column", flex: 1 }),
        rowGap: 12,
        marginLeft: 20,
        marginBottom: 16,
        ...style,
      }}
    >
      <View style={{ ...flex({ dir: "row" }) }}>
        <ListHeading label={label}></ListHeading>
      </View>
      <View
        style={{
          ...flex({ dir: "row", justify: "space-between" }),
        }}
      >
        <FlatList
          data={[...new Array(10)]}
          horizontal
          renderItem={({ item, index }) => {
            return (
              <PlaceCard index={index + startIndex} key={index}>
                {firstCard ? (
                  <FirstCardText text={imageText?.[index] || ""} />
                ) : (
                  <SecondCardText
                    text={[textArray?.[index]] || ""}
                  ></SecondCardText>
                )}
              </PlaceCard>
            );
          }}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default ListItems;