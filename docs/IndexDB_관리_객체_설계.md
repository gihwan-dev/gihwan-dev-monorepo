# IndexDB 관리 객체 설계

## IDB가 해야 하는 일

그리드 패널에 위치된 위젯들에 대한 정보를 배열 형태로 가지고 있어야 한다.

각 위젯에 대한 인터페이스

```typescript
interface WidgetInfo {
  offsetX: number;
  offsetY: number;
  width: number;
  height: number;
  widgetName: string;
}
```
