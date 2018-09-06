<Switch>
<Route exact path= '/' render={()=> <NextBtn />} />

<Route 
    path='/wOne' 
    render={ ()=> <WizardOne 
                    loanType={loanType} 
                    propType={propType} 
                    handleLoanType={changeLoanType} 
                    handlePropType={changePropertyType}/> } 
/>
<Route
    path="/wTwo" 
    render={ ()=> <WizardTwo 
                    city={city} 
                    updateCity={updateCity}/> } 
/>
<Route 
    path="/wThree" 
    render={ ()=> <WizardThree 
                    loanType={loanType} 
                    propType={propType} 
                    propToBeUsedOn={changePropertyToBeUsedOn} 
                    propUsedOn={propToBeUsedOn}/> } 
/>
<Route
    path='/wFour' 
    render={ ()=> <WizardFour 
                    foundFalse={foundFalse} 
                    foundTrue={foundTrue} 
                    found={found}/> }  
/>
<Route
    path="/wFive" 
    render={ ()=> <WizardFive 
                    realEstateAgentTrue={realEstateAgentTrue} 
                    realEstateAgentFalse={realEstateAgentFalse} 
                    realEstateAgent={realEstateAgent}/> }  
/>
<Route 
    path="/wSix" 
    render={ ()=> <WizardSix 
                    downPayment={downPayment} 
                    updateDownPayment={updateDownPayment} 
                    cost={cost} 
                    updateCost={updateCost}/> } 
/>
<Route 
    path="/wSeven" 
    render={ ()=> <WizardSeven 
                    credit={credit} 
                    updateCreditE={updateCreditE} 
                    updateCreditF={updateCreditF} 
                    updateCreditG={updateCreditG} 
                    updateCreditP={updateCreditP}/> } 
/>
<Route 
    path="/wEight" 
    render={ ()=> <WizardEight 
                    history={history} 
                    updateHistory ={updateHistory} /> } 
/>
<Route
    path="/wNine" 
    render={ ()=> <WizardNine 
                    addressOne={addressOne} 
                    addressTwo={addressTwo} 
                    addressThree={addressThree} 
                    updateAddLineOne={updateAddLineOne} 
                    updateAddLineTwo={updateAddLineTwo} 
                    updateAddLineThree={updateAddLineThree} /> } 
/>
<Route 
    path="/wTen"
    render={ ()=> <WizardTen 
                    firstName={firstName} 
                    lastName={lastName} email={email} 
                    updateFirst={updateFirst} 
                    updateLast={updateLast} 
                    updateEmail={updateEmail} /> } 
/>
<Route 
    path="/wEleven"
    render={ ()=> <WizardEleven 
                    firstName={firstName} 
                    lastName={lastName} 
                    email={email} 
                    loanType={loanType} 
                    propType={propType} 
                    propToBeUsedOn={propToBeUsedOn} 
                    city={city} 
                    found={found} 
                    realEstateAgent={realEstateAgent} 
                    downPayment={downPayment} 
                    cost={cost} 
                    credit={credit} 
                    history={history} 
                    addressOne={addressOne}
                    addressTwo={addressTwo} 
                    addressThree={addressThree} /> } 
/>
<Route path='/finish' component={Finish} />
</Switch>