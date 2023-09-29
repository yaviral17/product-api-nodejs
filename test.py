import random
name = ["iphone-10","realme-narzo","iphone-11","iphone-12","iphone-13","iphone-14","iphone-15","samsung-galaxy","mi","infinix","poco","vivo","iq" ,"nothing-2","oneplus-CE","oneplus-Nord-10","realme-10","realme-narzo-20-pro","motorola","nokia-1162"]
dict = [];
for i in range(40):
    nm = random.choice(name)
    price = random.randrange(30000,80000)
    feature = bool(random.randint(0,1))
    cmpny = nm.split("-")[0]
    if cmpny == "iphone":
        cmpny = "apple"
    obj={
        "orderNo":len(dict),
        "name":nm,
        "price":price,
        "feature": feature,
        "company": cmpny
    };
    if obj not in dict:
        dict.append(obj)
print(dict)