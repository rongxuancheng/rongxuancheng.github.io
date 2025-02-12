#include <iostream>
#include <cstring>

using namespace std;

const int MAX_N = 100;

int main() {
    int T;
    cin >> T;
    for (int t = 0; t < T; t++)
    {
        int N, A, B;
        cin >> N >> A >> B;
        char overlay[MAX_N][MAX_N + 1];
        bool initialStars[MAX_N][MAX_N];
        memset(initialStars, false, sizeof(initialStars));
        // Read the first N lines of the overlay photo
        for (int i = 0; i < N; ++i) {
            cin >> overlay[i];
        }

        bool possible = true;

        // Process the first N lines for 'G' and 'B' pixels
        for (int i = 0; i < N; ++i) {
            for (int j = 0; j < N; ++j) {
                char color = overlay[i][j];
                if (color == 'G') {
                    initialStars[i][j] = true;
                }
                else if (color == 'B') {
                    int prevI = i - B;
                    int prevJ = j - A;
                    if (prevI < 0 || prevJ < 0 || prevI >= N || prevJ >= N || initialStars[prevI][prevJ]) {
                        possible = false;
                        break;
                    }
                    initialStars[prevI][prevJ] = true;
                }
            }
            if (!possible) break;
        }

        // If not possible, we don't need to process the second photo
        if (possible) {
            // Read the second N lines of the overlay photo
            char secondPhoto[MAX_N][MAX_N + 1];
            for (int i = 0; i < N; ++i) {
                cin >> secondPhoto[i];
            }

            // Process the second N lines for 'B' pixels
            for (int i = 0; i < N; ++i) {
                for (int j = 0; j < N; ++j) {
                    char color = secondPhoto[i][j];
                    if (color == 'B') {
                        int prevI = i - B;
                        int prevJ = j - A;
                        if (prevI < 0 || prevJ < 0 || prevI >= N || prevJ >= N || initialStars[prevI][prevJ]) {
                            possible = false;
                            break;
                        }
                    }
                }
                if (!possible) break;
            }
        }

        if (possible) {
            int count = 0;
            for (int i = 0; i < N; ++i) {
                for (int j = 0; j < N; ++j) {
                    if (initialStars[i][j]) {
                        ++count;
                    }
                }
            }
            cout << count << endl;
        }
        else {
            cout << -1 << endl;
        }
    }
}
