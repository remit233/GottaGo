using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
public class ContentManager : MonoBehaviour
{
    public Toggle FightToggle;
    public GameObject PoopMonsterPreFab;
    private GameObject SpawnedPoop;
    public Camera ARCamera;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            Debug.Log("Mouse Down!");
        }
    }
}
