// ask for a person's name, and generate a framed greeting
#include <iostream>
#include <string>

int main()
{
	std::cout << "Please enter your first name: ";
	std::string name;
	std::cin >> name;  // 输入名字, 并保存到 name 变量中

	// build the message that we intend to write
	// 可以直接使用 + , 有运算符的重载
	const std::string greeting = "Hello, " + name + "!";

	// build the second and fourth lines of the output
	// 生成空格字符, 个数为 greeting.size() 个
	const std::string spaces(greeting.size(), ' '); // 必须用单引号
	// 在两端加上 "*" 和 " "
	const std::string second = "* " + spaces + " *";

	// build the first and fifth lines of the output
	const std::string first(second.size(), '*');

	// write it all
	std::cout << std::endl;
	std::cout << first << std::endl;
	std::cout << second << std::endl;
	std::cout << "* " << greeting << " *" << std::endl;
	std::cout << second << std::endl;
	std::cout << first << std::endl;

	return 0;
}
