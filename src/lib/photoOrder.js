// 照片顺序配置文件
// 您可以在这里调整照片的显示顺序
// 文件名不需要包含扩展名，系统会自动匹配

export const photoOrder = {
  animals: [
    // 动物照片顺序 - 按您想要的顺序排列
    // 示例：'DSC00141', 'DSC00143', 'DSC00146'
  ],
  
  landscapes: [
    // 风景照片顺序 - 按您想要的顺序排列
    // 示例：'DSC00780', 'DSC02231', 'DSC02236'
    'DSC00518.JPG',
    'DSC00780.JPG',
    'DSC02231.JPG'
  ],
  
  flowers: [
    // 花花照片顺序 - 按您想要的顺序排列
    // 示例：'flower1', 'flower2', 'flower3'
    'DSC02236.jpg',
    'IMG_3683.JPG',
    'DSC00985.JPG',
    'IMG_3685.JPG',
    'IMG_3681.JPG',
    'DSC01076.JPG'
  ],
  
  cities: [
    // 城市照片顺序 - 按您想要的顺序排列
    // 示例：'city1', 'city2', 'city3'
    'DSC02273.JPG',
    'DSC02242.jpg',
    'DSC01691 2.jpg',
    'DSC02262.jpg',
    'DSC02362.JPG',
    'DSC01811 2.jpg',
    'DSC02371.JPG',
    'DSC01971.jpg'

  ]
}

// 获取排序后的照片列表
export function getOrderedPhotos(photos, category) {
  const order = photoOrder[category] || []
  
  if (order.length === 0) {
    // 如果没有配置顺序，使用默认排序
    return photos.sort()
  }
  
  // 按照配置的顺序排列
  const orderedPhotos = []
  const remainingPhotos = [...photos]
  
  // 先添加配置顺序中的照片
  order.forEach(filename => {
    const photo = remainingPhotos.find(p => 
      p.toLowerCase().startsWith(filename.toLowerCase())
    )
    if (photo) {
      orderedPhotos.push(photo)
      remainingPhotos.splice(remainingPhotos.indexOf(photo), 1)
    }
  })
  
  // 再添加剩余的照片
  orderedPhotos.push(...remainingPhotos.sort())
  
  return orderedPhotos
}
