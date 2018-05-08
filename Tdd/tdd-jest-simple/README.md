1.https://babeljs.io
install babel dependencies:

$yarn add --dev babel-cli babel-preset-env
$yarn add --dev jest babel-jest babel-core

2.create file .babelrc at root directory. The content as below:
{
  "presets": ["env"]
}
