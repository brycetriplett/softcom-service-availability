import { useState, useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import {
  AddressPage,
  PricePage,
  ConfirmationPage,
  ErrorPage,
  NoServicePage,
  ContactPage,
} from "./components";
import ReactPixel from "react-facebook-pixel";

const App = () => {
  const [formData, setFormData] = useState({});
  const [chosenTier, setChosenTier] = useState({});
  const history = useHistory();

  useEffect(() => {
    // Initialize Facebook Pixel on component mount
    ReactPixel.init("358056393552157");

    // Track the initial page view
    ReactPixel.pageView();

    // Add a listener to track page changes
    const unlisten = history.listen(() => {
      ReactPixel.pageView();
    });

    // Cleanup the listener on component unmount
    return () => {
      unlisten();
    };
  }, [history]);

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
