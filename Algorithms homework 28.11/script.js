// Провести ассимптотический анализ для каждой функции.
// Написать time complexity  и space complexity

// 1)
function test1(n) {
  if (n == 1) return;
  for (i = 1; i <= n; i++) for (j = n; j >= 1; j--) console.out('*');
}

// *time complexity O(n^2)
// *space complexity O(1)

// ==========================================================
// 2)
function test2(n) {
  let a = 0;
  for (i = 0; i < n; i++) for (j = n; j > i; j--) a = a + i + j;
}

// *time complexity O(n^2)
// *space complexity O(1)

// ==========================================================
// 3)
function test3(n) {
  let i,
    j,
    a = 0;
  for (i = n / 2; i <= n; i++) for (j = 2; j <= n; j = j * 2) a = a + n / 2;
}

// *time complexity O(n^2)
// *space complexity O(1)
