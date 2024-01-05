import KanbanProvider from "./KanbanProvider";
import KanbanContainer from "./KanbanContainer";

function Products() {
    return (
      <KanbanProvider>
        <div>Products</div>
        <KanbanContainer/>
      </KanbanProvider>
    );
  }
  export default Products;
  