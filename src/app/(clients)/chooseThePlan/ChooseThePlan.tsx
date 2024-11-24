'use client'
import React, {useState} from 'react';

import './ChooseThePlan.css'

const ChooseThePlan = () => {

    const [state, setState] = useState<boolean>(false);

    return (
        <main className={'maninBlockChoosePlan'}>
            <section className={'mainBoxChooseOption'}>
                <div>
                    <h2>Choose the plan that is right for you</h2>
                    <p>Join StreamVibe and select from our flexible subscription options tailored to suit your viewing
                        preferences.
                        Get ready for non-stop entertainment!</p>
                </div>
                <div className={'mainBoxButton'}>
                    <div onClick={() => setState(false)}
                         className={!state ? 'boxButton activeButton' : 'boxButton'}>Monthly
                    </div>
                    <div onClick={() => setState(true)}
                         className={state ? 'boxButton activeButton' : 'boxButton'}>Yearly
                    </div>
                </div>
            </section>
            <section>
                {
                    !state
                        ?
                        <div className={'mainBoxCardsPlan'}>

                            <div className={'cardPlan'}>
                                <h3 className={'typeOfPlan'}>
                                    Basic Plan
                                </h3>
                                <p className={'describeOfPlan'}>
                                    Enjoy an extensive library of movies and shows, featuring a range of content,
                                    including recently released titles.
                                </p>
                                <h3 className={'planPrice'}>
                                    $9.99/month
                                </h3>
                                <div className={'mainBoxButtonsCards'}>
                                    <div className={'buttonStartFree'}>Start Free Trial</div>
                                    <div className={'buttonChoosePlan'}>Choose Plan</div>
                                </div>
                            </div>

                            <div className={'cardPlan'}>
                                <h3 className={'typeOfPlan'}>
                                    Standard Plan
                                </h3>
                                <p className={'describeOfPlan'}>
                                    Access to a wider selection of movies and shows, including most new releases and exclusive content
                                </p>
                                <h3 className={'planPrice'}>
                                    $12.99/month
                                </h3>
                                <div className={'mainBoxButtonsCards'}>
                                    <div className={'buttonStartFree'}>Start Free Trial</div>
                                    <div className={'buttonChoosePlan'}>Choose Plan</div>
                                </div>
                            </div>

                            <div className={'cardPlan'}>
                                <h3 className={'typeOfPlan'}>
                                    Premium Plan
                                </h3>
                                <p className={'describeOfPlan'}>
                                    Access to a widest selection of movies and shows, including all new releases and Offline Viewing
                                </p>
                                <h3 className={'planPrice'}>
                                    $14.99/month
                                </h3>
                                <div className={'mainBoxButtonsCards'}>
                                    <div className={'buttonStartFree'}>Start Free Trial</div>
                                    <div className={'buttonChoosePlan'}>Choose Plan</div>
                                </div>
                            </div>
                        </div>

                        :
                        <div className={'mainBoxCardsPlan'}>
                            <div className={'cardPlan'}>
                                <h3 className={'typeOfPlan'}>
                                    Basic Plan
                                </h3>
                                <p className={'describeOfPlan'}>
                                    Enjoy an extensive library of movies and shows, featuring a range of content,
                                    including recently released titles.
                                </p>
                                <h3 className={'planPrice'}>
                                    $39.99/month
                                </h3>
                                <div className={'mainBoxButtonsCards'}>
                                    <div className={'buttonStartFree'}>Start Free Trial</div>
                                    <div className={'buttonChoosePlan'}>Choose Plan</div>
                                </div>
                            </div>

                            <div className={'cardPlan'}>
                                <h3 className={'typeOfPlan'}>
                                    Standard Plan
                                </h3>
                                <p className={'describeOfPlan'}>
                                    Enjoy an extensive library of movies and shows, featuring a range of content,
                                    including recently released titles.
                                </p>
                                <h3 className={'planPrice'}>
                                    $99.99/month
                                </h3>
                                <div className={'mainBoxButtonsCards'}>
                                    <div className={'buttonStartFree'}>Start Free Trial</div>
                                    <div className={'buttonChoosePlan'}>Choose Plan</div>
                                </div>
                            </div>

                            <div className={'cardPlan'}>
                                <h3 className={'typeOfPlan'}>
                                    Premium Plan
                                </h3>
                                <p className={'describeOfPlan'}>
                                    Enjoy an extensive library of movies and shows, featuring a range of content,
                                    including recently released titles.
                                </p>
                                <h3 className={'planPrice'}>
                                    $119.99/month
                                </h3>
                                <div className={'mainBoxButtonsCards'}>
                                    <div className={'buttonStartFree'}>Start Free Trial</div>
                                    <div className={'buttonChoosePlan'}>Choose Plan</div>
                                </div>
                            </div>

                        </div>
                }
            </section>

        </main>
    );
};

export default ChooseThePlan;