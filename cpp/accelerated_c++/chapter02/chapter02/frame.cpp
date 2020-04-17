#include <iostream>
#include <string>

// say what standard-library names we use
using std::cin;         using std::endl;
using std::cout;        using std::string;


int main()
{
	// ask for the person's name
	cout << "Please enter your first name: ";

	// read the name
	string name;
	cin >> name;

	// build the message that we intend to write
	const string greeting = "Hello, " + name + "!";

	// the number of blanks surrounding the greeting
	const int pad = 2;

	// the number of rows and columns to write
	// 行数 = 第一行* + 填充的空白行 + 问候语 + 填充的空白行 + 最后一行*
	const int rows = pad * 2 + 3;
	// 列数 = 第一行* + 填充的空白行 + 问候语的长度 + 填充的空白行 + 最后一行*
	const string::size_type cols = greeting.size() + pad * 2 + 2;

	// write a blank line to separate the output from the input
	cout << endl;

	// write `rows' rows of output
	// invariant: we have written `r' rows so far
	// 从上到下, 从左到右, 打印字符
	for (int r = 0; r != rows; ++r) {

		// 初始化 c 的值为 0
		string::size_type c = 0;

		// invariant: we have written `c' characters so far in the current row
		while (c != cols) {

			// is it time to write the greeting?
			// 当坐标为 (pad+1, pad+1) 即首行*+填充行 时
			// 打印 问候语
			if (r == pad + 1 && c == pad + 1) {
				cout << greeting;
				c += greeting.size();
			}
			else {
				// 其余坐标打印 ' ' 或 '*'
				// 如果是边界坐标, 打印 '*'
				// 不是边界坐标, 就打印 ' '
				// are we on the border?
				if (r == 0 || r == rows - 1 ||
					c == 0 || c == cols - 1)
					cout << '*'; // cout单引号双引号都可以
				else
					cout << " ";
				++c;
			}
		}

		cout << endl;
	}

	return 0;
}

