#include <iomanip>
#ifndef __GNUC__
#include <ios>
#endif
#include <iostream>
#include <string>

using std::cin;                  using std::setprecision;
using std::cout;                 using std::string;
using std::endl;                 using std::streamsize;

int main()
{
	// ask for and read the student's name
	cout << "Please enter your first name: ";
	string name;
	cin >> name;
	cout << "Hello, " << name << "!" << endl;

	// ask for and read the midterm and final grades
	cout << "Please enter your midterm and final exam grades: ";
	double midterm, final;
	// 分别读取数值, 先读取到 midterm, 再读取到 final
	cin >> midterm >> final;

	// ask for the homework grades
	// 会自动拼接在一起
	cout << "Enter all your homework grades, "
		"followed by end-of-file: ";

	// the number and sum of grades read so far
	int count = 0;
	double sum = 0;

	// a variable into which to read
	double x;

	// invariant:
	//     we have read `count' grades so far, and
	//     `sum' is the sum of the first `count' grades
	// 循环读取值到 x, 并累加到 sum 中, 
	// 直到用户输入
	while (cin >> x) {
		++count;
		sum += x;
	}

	// write the result
	// 保存现有的输出的精度
	streamsize prec = cout.precision();
	cout << "Your final grade is " << setprecision(3)
		<< 0.2 * midterm + 0.4 * final + 0.4 * sum / count
		<< setprecision(prec) << endl;

	return 0;
}

