
# coding: utf-8

# In[1]:


import requests


# In[2]:


import pandas as pd


# In[3]:


import numpy as np


# In[5]:


import json


# In[6]:


pd.read_json("../rows.json")


# In[7]:


data = json.load("../rows.json")


# In[8]:


with open('../data.json') as data_file:


# In[9]:


import json
with open('../rows.json') as data_file:    
data = json.load(data_file)


# In[10]:


with open('../rows.json') as data_file:   


# In[11]:


with open('../rows.json') as data_file:    
    data = json.load(data_file)


# In[12]:


data = pd.read_json('../rows.json')


# In[13]:


a = open('../rows.json')


# In[14]:


a


# In[16]:


b = jsons(a)['data']


# In[17]:


b = json.loads(a)['data']


# In[18]:


a


# In[19]:


a


# In[20]:


b = open(a, "r", encoding="utf-8")


# In[21]:


with open(a, 'r') as f2:
    new_data = f2.read()
    print(data)


# In[22]:


from pandas.io.json import json_normalize


# In[23]:


with open('../rows,json','w') as f:
   json.dump(data, f, indent=3, sort_keys=True)


# In[24]:


import yaml


# In[25]:


yaml.load('../rows.json')


# In[26]:


yamlstuff = yaml.load('../rows.json')


# In[27]:


yamlstuff


# In[28]:


file = pd.read_json("../rows.json")


# In[29]:


with open('../rows.json') as data_file:    
    data = json.load(data_file)


# In[30]:


s = '../rows.json'


# In[31]:


while True:
    try:
        result = json.loads(s)   # try to parse...
        break                    # parsing worked -> exit loop
    except Exception as e:
        # "Expecting , delimiter: line 34 column 54 (char 1158)"
        # position of unexpected character after '"'
        unexp = int(re.findall(r'\(char (\d+)\)', str(e))[0])
        # position of unescaped '"' before that
        unesc = s.rfind(r'"', 0, unexp)
        s = s[:unesc] + r'\"' + s[unesc+1:]
        # position of correspondig closing '"' (+2 for inserted '\')
        closg = s.find(r'"', unesc + 2)
        s = s[:closg] + r'\"' + s[closg+1:]
print result


# In[33]:


import json, re


# In[37]:


with open('../rows.json', 'r') as jf:
    weatherData = json.load(jf)
    print weatherData


# In[41]:


import pdb


# In[46]:


a


# In[47]:


a.info()


# In[48]:


a.attribute


# In[49]:


a.attributes


# In[50]:


a.read(5)


# In[51]:


a.read(10000)


# In[52]:


for line in a:
    print(line, end="")


# In[53]:


a.readlines()


# In[54]:


a = open('../rows.json')


# In[55]:


a


# In[56]:


a = open('../rows.json', mode='r', encoding='utf-8')


# In[57]:


a


# In[58]:


a.read(100)


# In[59]:


a.read(10000)


# In[63]:


a


# In[64]:


open(a)


# In[65]:


for i, line in enumerate(1):
    if i == 25:
        # 26th line
    elif i == 29:
        # 30th line
    elif i > 29:
        break


# In[66]:


import linecache 
    


# In[67]:


theline = linecache.getline('../rows.json', 1000)


# In[68]:


theline


# In[69]:


theline = linecache.getline('../rows.json', 1230864)


# In[70]:


theline


# In[ ]:


with open('../rows.json') as data_file:    
    data = json.load(data_file)


# In[1]:


with open('../rows.json') as data_file:    
    data = json.load(data_file)


# In[2]:


require json


# In[3]:


from sodapy import Socrata


# In[4]:


from sodapy import Socrata


# In[5]:


from sodapy import Socrata


# In[6]:


from sodapy import Socrata


# In[7]:


client = Socrata("data.cityofnewyork.us", "1vscl5xBtxiCI6ReKRmVwa0zt")


# In[8]:


print("Domain: {domain:}\nSession: {session:}\nURI Prefix: {uri_prefix:}".format(**client.__dict__))


# In[9]:


results = client.get("k397-673e")


# In[ ]:


results


# In[10]:


df = pd.DataFrame.from_dict(results)


# In[11]:


import pandas as pd


# In[12]:


df = pd.DataFrame.from_dict(results)


# In[13]:


results = client.get("k397-673e")


# In[14]:


df = pd.DataFrame.from_dict(results)


# In[15]:


df.head()


# In[16]:


df


# In[17]:


identified = "k397-673e"


# In[18]:



meta= client.get_metadata(identified)
[x['name'] for x in metadata['columns']]


# In[19]:


meta= client.get_metadata(identified)


# In[20]:


[x['name'] for x in meta['columns']]


# In[21]:


meta_amount = [x for x in meta['columns'] if x['name'] == 'AMOUNT'][0]
meta_amount


# In[22]:


meta_amount = [x for x in meta['columns'] if x['name'] == 'Fiscal Year'][0]
meta_amount


# In[23]:


meta_amount['cachedContents']['average']


# In[24]:


results = client.get(identified, limit=6)
results


# In[25]:


results = client.get(socrata_dataset_identifier, limit=2000, select="name, amount")
results


# In[26]:


results = client.get(identified, limit=6, select="name, amount")
results


# In[27]:


results = client.get(identified, limit=6)
results


# In[28]:


results = client.get(identified, limit=2000)
results


# In[29]:


results = client.get(identified, limit=1200000)


# In[30]:


1200000/50000


# In[31]:


df = pd.DataFrame()


# In[32]:


for i in range(2):
    results = client.get(identified, limit=50000, offset=50000*i)
    df.append(results)


# In[33]:


df


# In[35]:


results = client.get(identified, limit=50000, offset=50000*0)


# In[36]:


df = pd.read_json(results, lines=True)


# In[38]:


df.append(results)


# In[39]:


for i in range(1,24):
    results = client.get(identified, limit=50000, offset=50000*i)
    df.append(results)


# In[40]:


df


# In[41]:


results = client.get(identified, limit=50000, offset=50000*24)


# In[42]:


results


# In[43]:


df.head()


# In[44]:


df = pd.DataFrame()


# In[45]:


for i in range(2):
    results = client.get(identified, limit=50000, offset=50000*i)
    df.append(results)


# In[46]:


df

results.keys()
# In[47]:


results = client.get(identified, limit=50000, offset=50000*0)


# In[48]:


results.keys()


# In[49]:


df


# In[50]:


df = pd.DataFrame()


# In[51]:


df


# In[52]:


df.append(results)


# In[53]:


df.keys()


# In[54]:


results = client.get(identified, limit=50000, offset=50000*1)


# In[55]:


pd.read_json(results)


# In[56]:


results


# In[57]:


pd.DataFrame(results)


# In[58]:


df.append(pd.DataFrame(results))


# In[59]:


df = pd.DataFrame()


# In[60]:


results = client.get(identified, limit=50000, offset=50000*0)
results2 = results = client.get(identified, limit=50000, offset=50000*1)


# In[61]:


results[0]


# In[62]:


results2[0]


# In[63]:


results = client.get(identified, limit=50000, offset=50000*0)
results2 = client.get(identified, limit=50000, offset=50000*1)


# In[64]:


results[0]


# In[65]:


results2[0]


# In[66]:


1 = pd.DataFrame(results)


# In[67]:


a = pd.DataFrame(results)


# In[68]:


b = pd.DataFrame(results2)


# In[69]:


data = [a,b]


# In[70]:


resulting = pd.concat(data)


# In[71]:


resulting


# In[72]:


final_results = []
loops = 24 
records = 50000
values = 'abcdefghi'
#for i in range(loops):
    #results = client.get(identified, limit=records, offset=records*i)
    #df.append(results)


# In[73]:


values


# In[74]:


values[0]


# In[75]:


final_results.append(values[0])


# In[76]:


final_results


# In[77]:


final_results = []


# In[78]:


final_results = []
loops = 24 
records = 50000
values = 'abcdefghijklmnopqrstuvwxyz'
for i in range(loops):
    results = client.get(identified, limit=records, offset=records*i)
    final_results.append(pd.DataFrame(results))
    


# In[79]:


final_results = []
loops = 24 
records = 50000
values = 'abcdefghijklmnopqrstuvwxyz'
for i in range(loops):
    results = client.get(identified, limit=records, offset=records*i)
    final_results.append(pd.DataFrame(results))


# In[80]:


final_results


# In[81]:


result = pd.concat(final_results)


# In[82]:


result


# In[83]:


result.tail


# In[84]:


result.tail()


# In[85]:


result.head()

result
# In[86]:


result


# In[87]:


result[60000]


# In[88]:


result.iloc[60000]


# In[89]:


result.iloc[-1]


# In[90]:


result.iloc[10000]


# In[91]:


result.reset_index()


# In[92]:


result


# In[93]:


result = result.reset_index()


# In[94]:


result


# In[95]:


del result['index']


# In[96]:


result


# In[97]:


result.groupby(['year']).agg({'base_salary': np.mean})


# In[98]:


result.groupby(['fiscal_year']).agg({'base_salary': np.mean})


# In[99]:


import numpy as np


# In[100]:


result.groupby(['year']).agg({'base_salary': np.mean})


# In[101]:


result.groupby(['fiscal_year']).agg({'base_salary': np.mean})


# In[102]:


result.info()

