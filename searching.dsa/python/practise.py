l=[]
x=str(input("Hi may i know your name:"))
y=int(input("Enter how many pairs you wanna add:"))
for i in range(y):
    p=int(input())
    q=int(input())
    t=(p,q)
    l.append(t)
print(l)
for i in l[:]:
    if((i[1],i[0]) not in l):
      l.append((i[1],i[0]))
print(l)
