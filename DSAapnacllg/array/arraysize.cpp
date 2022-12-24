#include<iostream>
using namespace std;

int main()
{
    int n;
    cin>>n;

    int array[n];

    for(int i=0;i<n;i++){
        cin>>array[i];
    };

    int maxNum;
    int minNum;

    for(int i=0;i<n;i++){
        if(array[i]>maxNum){
            maxNum=array[i];
        }
        if(array[i]<minNum){
            minNum=array[i];
        }
    }

    return 0;
}