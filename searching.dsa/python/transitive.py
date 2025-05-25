def female(x):
    if(x[-1] in ('a','i')):
        return True
    else:return False


def adder(l):
        for (a,b) in l[:]:
            for (d,c) in l[1:]:
                if((a,c) not in l):
                    l.append((a,c))
                if((c,a) not in l):
                    l.append((c,a))

def is_transitive(l):
    for (a, b) in l[:]:
        for (x, c) in l[1:]:
            if b == x:  
                if (a, c) not in l:  
                    return False
    return True

def symmetric(l):
     for i in l[:]:
        if((i[1],i[0]) not in l):
            l.append((i[1],i[0]))
    
l=[]
x=str(input("Hi may i know your name:"))
print("Hi ",x,"Welcome to my programme!")
y=int(input("Please enter how many pairs you wanna add:"))
for i in range(y):
    p=int(input())
    q=int(input())
    t=(p,q)
    l.append(t)
print("Enter S to get symmetric set (or) Enter T to get transitive set")
k=input().strip().upper()

if k=="S":
    symmetric(l)
elif k=="T":
    while not is_transitive(l):   
        adder(l)
print(l)
if female(x):
    print("Hope you enjoyed Miss.",x,"\nHave a good day")
else:
    print("Hope you are satisfied Mr.",x,"\nHave a good day")