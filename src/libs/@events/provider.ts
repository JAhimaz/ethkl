import { selector } from 'recoil'

export type EventDetail = {
  id: string
  name: string
  description: string
  startDate: Date
  endDate?: Date
  register?: string
  banner?: string
  location?: string
}

const eventDataState = selector<EventDetail[]>({
  key: 'eventDataState',
  get: async () => {
    try {
      // Get Data from Airtable
      const response = await fetch("https://api.airtable.com/v0/appPbu6pBVNZLIpxQ/tblDJK2XUN0psxS4L", {
        method: 'GET',
        headers: {
          // Read only key, no need to hide
          Authorization: `Bearer patqf6UZLd5ndn81i.121b0b798d5676698818e683494e0e9290ce51fe5c4bae78a524cfed5b27b441`,
        },
      })
      .then((res) => res.json())
      .then((data) => data.records)
      .then((records) => records.map((record: any) => {
        return {
          id: record?.id,
          name: record?.fields?.name,
          description: record?.fields?.description,
          startDate: new Date(record?.fields?.startDate),
          endDate: new Date(record?.fields?.endDate),
          register: record?.fields?.register,
          banner: record?.fields?.banner,
          location: record?.fields?.location,
        }
      }))

      return response
    } catch (error) {
      console.log(error)
    }
  },
})

export default eventDataState