#include<iostream>
using namespace std;

void fact(int n){
    int factorial=1;
    for(int i=2; i<=n;i++){
        factorial *= i;
    }
    cout<<factorial<<endl;
}

int main()
{
    int num;
    cin>>num;


    fact(num);


    return 0;
}