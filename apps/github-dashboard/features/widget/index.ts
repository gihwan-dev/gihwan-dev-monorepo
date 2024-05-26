import TestItem from "~/features/widget/components/TestItem";
import TestItem2 from "~/features/widget/components/TestItem2";
import TestItem3 from "~/features/widget/components/TestItem3";

export const widgetList = [
  {
    width: 3,
    height: 3,
    name: "TestItem1",
    description: "some description",
    component: TestItem,
  },
  {
    width: 2,
    height: 1,
    name: "TestItem2",
    description: "some description",
    component: TestItem2,
  },
  {
    width: 5,
    height: 5,
    name: "TestItem3",
    description: "some description",
    component: TestItem3,
  },
];
