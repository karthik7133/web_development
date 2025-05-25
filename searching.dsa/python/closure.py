
l=[(2,3),(3,5),(6,7)]
for i in l[:]:
    if((i[1],i[0]) not in l):
      l.append((i[1],i[0]))
print(l)
        
    
        


