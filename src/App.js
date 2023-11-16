import { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  AddressPage,
  PricePage,
  ConfirmationPage,
  ErrorPage,
  NoServicePage,
  ContactPage,
} from "./components";

const App = () => {
  const [formData, setFormData] = useState({});
  const [chosenTier, setChosenTier] = useState({});

  return (
    <Switch>
      <Route path="/address">
        <AddressPage setFormData={setFormData} formData={formData} />
      </Route>
      <Route path="/price">
        <PricePage
          formData={formData}
          setFormData={setFormData}
          setChosenTier={setChosenTier}
        />
      </Route>
      <Route path="/contact">
        <ContactPage formData={formData} setFormData={setFormData} />
      </Route>
      <Route path="/confirmation">
        <ConfirmationPage formData={formData} chosenTier={chosenTier} />
      </Route>
      <Route path="/error" component={ErrorPage} />
      <Route path="/noService" component={NoServicePage} />
      <Redirect from="/" to="/address" />
    </Switch>
  );
};

export default App;
