#include <iostream>
#include <vector>
#include <string>
using namespace std;

#include "Student_info.h"

bool compare(const Student_info& x, const Student_info& y)
{
  return x.name < y.name;
}

istream& read(istream& is, Student_info& s)
{
  // cout << "==========next==========" << endl;
  cout << "please enter your name :";
  is >> s.name;
  cout << "please enter midterm grade :";
  is >> s.midterm;
  cout << "plsase enter final grade :";
  is >> s.final;

  cout << "please enter your homework grades\n";
  read_hw(is, s.homework);

  return is;
}

istream& read_hw(istream& is, vector<double>& hw)
{
  if (is)
  {
    hw.clear();

    double x;
    while (is >> x)
    {
      hw.push_back(x);
    }

    is.clear();
    is.ignore(1024, '\n');
    // is.sync();
  }
  return is;
}
