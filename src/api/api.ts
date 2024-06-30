const baseUrl = 'https://sudoku-api.vercel.app/api/dosuku?query='

const api = {
  async get(url: string) {
    const response = await fetch(decodeURI(url))
    const data = await response.json()

    return data
  },

  async getNewBoardWithSolution() {
    const url = baseUrl + '{newboard(limit:2){grids{solution}}}'
    return this.get(url)
  }
}

export default api
