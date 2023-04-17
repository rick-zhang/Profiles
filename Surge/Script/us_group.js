const url = 'https://sub.nexconvert.com/downloadConfig/NodeList.aspx?urk=75b67a09-803e-433e-b3c1-0abf7870febc';
const usNodes = [];

$httpClient.get(url, function (error, response, data) {
  if (error) {
    console.log(error);
    return;
  }
  const nodeList = data.split('\n');
  usNodes.length = 0;
  for (let node of nodeList) {
    if (node.startsWith('🇺🇸 USA')) {
      usNodes.push(node);
    }
  }
  $surge.setSelectGroupPolicy('US', 'url-test', usNodes);
});

$done({});

