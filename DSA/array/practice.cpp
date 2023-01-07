#include<iostream>
using namespace std;


// Most frequent number in an array
/*
int mostFrequent(int arr[], int n){
    int maxcount=0;
    int no_maxcnt;
    for(int i=0; i<n; i++){
        int count = 0;
        for(int j=0; j<n; j++){
            if(int arr[i]==arr[j]){
                count++;
            }
        }
        if(count > maxcount){
            maxcount = count;
            no_maxcnt = arr[i];
        }
    }
    return no_maxcnt;
}

int main()
{
    int arr[] = { 40,50,30,40,50,30,30 };
    int n = sizeof(arr) / sizeof(arr[0]);
    cout << mostFrequent(arr, n);
    return 0;
}
*/



// Largest till i 
int main()
{
    int n;
    cin >> n;

    int mx = INT_MIN;

    int arr[n];

    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }

    for(int i=0; i<n; i++){
        mx = max(mx, arr[i]);
        cout<<mx<<endl;
    }
    return 0;
}
