def arithmeticExpression(a, b, c):
    if a+b==c:
         return True
    elif a-b == c:
        return True
    elif a*b ==c:
        return True
    elif a/b ==c:
        return True
    return False

# Consider an arithmetic expression of the form a#b=c. Check whether it is possible to replace # with one of the four signs: +, -, * or / to obtain a correct expression.
