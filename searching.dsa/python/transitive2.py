def adder(l):
    for(a,b) in l[:]:
        for(c,d) in l[1:]:
            if (a,d) not in l:
                l.append((a,d))
            if (d,a) not in l:
                l.append((d,a))

def istransitive(l):
    for (a,b) in l[:]:
        for (c,d) in l[:]:
            if b==c:
                if (a,d) not in l:
                    return False
    return True

l=[(2,3),(3,4)]
while not istransitive(l):
    adder(l)
print(l)