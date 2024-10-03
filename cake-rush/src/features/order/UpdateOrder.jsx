import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiCakeRush";

function UpdateOrder() {
  //Msp34V

  const fetcher = useFetcher();

  return (
    <fetcher.Form className="text-right mt-8" method="PATCH">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}

export default UpdateOrder;
