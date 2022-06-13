##### Currency exchange calculator #####

## Function to check if a number is a whole number ##
def checkWholeNumber (message1, message2):
    while True:
        try:
            wholeNumber = int(input(message1))
        except ValueError:
            print(message2)
        else:
            return wholeNumber

## Function to check if a number is a decimal number ##
def checkDecimalNumber (message1, message2):
    while True:
        try:
            decimalNumber = float(input(message1))
        except ValueError:
            print (message2)
        else:
            return decimalNumber

## Function to check if the input is 'y' or 'n' ##
def checkYesNo (message1, message2):
    while True:
        yesNo = input(message1)
        if yesNo == "y" or yesNo == "n":
            return yesNo
        else:
            print(message2)

## Function to display the initial menu and get the conversion option ##
def getOptions ():
    print("##### Currency exchange calculator #####")
    chooseOption = "Choose an exchange option: "
    optionError = "The option selected does not exist. Please try again."
    while True:
        print("1:  Buy $ - " + str(dollarToGBP))
        print("2:  Buy € - " + str(euroToGBP))
        print("3:  Sell $ - " + str(gbpToDollar))
        print("4:  Sell € - " + str(gbpToEuro))
        
        conversionOption = checkWholeNumber(chooseOption, optionError)
        if conversionOption > 0 and conversionOption < 5:
            return conversionOption
        else:
            print(optionError)

## Function to get the conversion rate and currency ##
def conversionRate ():
    option = getOptions ()
    
    if option == 1:
        finalOption = dollarToGBP
    elif option == 2:
        finalOption = euroToGBP
    elif option == 3:
        finalOption = gbpToDollar
    else:
        finalOption = gbpToEuro

    if finalOption == dollarToGBP:
        exchangeCurrency = '$'
    elif finalOption == euroToGBP:
        exchangeCurrency = '€'
    elif finalOption == gbpToDollar:
        exchangeCurrency = '£'
    elif finalOption == gbpToEuro:
        exchangeCurrency = '£'
        
    return finalOption, exchangeCurrency

## Function to get the amount to be exchanged ##
def getInitialAmount ():
    enterInitialAmount = "Enter the amount to be exchanged: "
    initialAmountError = "Wrong value introduced. Please try again."
    while True:
        initialAmount = checkDecimalNumber(enterInitialAmount, initialAmountError)
        if initialAmount > 0:
            return initialAmount
        else:
            print(initialAmountError)

## Function that asks the users if they want to change the initial conversion rate ##
def changeConversionRate ():
    answerInput = "Do you want to change the exchange rate?(y/n) "
    answerError = "The answer selected does not exist. Please only use ‘y’ for yes and ‘n’ for no."
    answer = checkYesNo(answerInput, answerError)
    return answer

## Function to get the new conversion rate ##
def newConversionRate ():
    newConversionRateInput = "Enter the new conversion rate: "
    newConversionRateError = "Wrong value introduced. Please try again"
    while True:
        newConversionRate = checkDecimalNumber(newConversionRateInput, newConversionRateError)
        if newConversionRate > 0:
            return newConversionRate
        else:
            print(newConversionRateError)

## Main program ##
dollarToGBP = 0.74
euroToGBP = 0.83
gbpToDollar = 1.36
gbpToEuro = 1.2
end = "y"
while end != "n":
    finalOption, exchangeCurrency = conversionRate ()
    initialAmount = getInitialAmount ()
    answer = changeConversionRate ()
    if answer == 'y':
        newConversionRate = newConversionRate ()
        finalAmount = initialAmount * newConversionRate
        print("The amount you will receive is of " + str(exchangeCurrency) + str(format(finalAmount,'.2f')) + " at a conversion rate of " + str(newConversionRate) + " .")
    elif answer == 'n':
        finalAmount = initialAmount * finalOption
        print("The amount you will receive is of " + str(exchangeCurrency) + str(format(finalAmount,'.2f')) + " at a conversion rate of " + str(finalOption) + " .")
    endInput = "Do you want to process more conversions?(y/n) "
    endError = "The answer selected does not exist. Please only use ‘y’ for yes and ‘n’ for no."
    end = checkYesNo(endInput, endError)
    print("Goodbye!")
